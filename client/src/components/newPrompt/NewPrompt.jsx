import { IKImage } from "imagekitio-react";
import Upload from "../upload/Upload";
import "./newPrompt.css";
import { useEffect, useRef, useState } from "react";
import MediaSourceHandle from "../../lib/gemini";
import Markdown from "react-markdown";
import model from "../../lib/gemini";
import { useMutation, useQueryClient } from "@tanstack/react-query";
const NewPrompt = ({data}) => {

    const [question, setQuestion] = useState("");
    const [answer, setAnswer] = useState("");

    const [img, setImg] = useState({
        isLoading: false,
        error:"",
        dbData:{},
        aiData:{},
    });

    const chat = model.startChat({
        history: [
          {
            role: "user",
            parts: [{ text: "Hello" }],
          },
          {
            role: "model",
            parts: [{ text: "Great to meet you. What would you like to know?" }],
          },
        ],
        generationConfig: {
            //maxOutputTokens:100,
        },
      });

    const endRef = useRef(null);

        useEffect(() => {
            endRef.current.scrollIntoView({ behavior: "smooth" });
        }, [question, answer, img.dbData]);

        const queryClient = useQueryClient();

    const mutation = useMutation({
        mutationFn: (text) => {
            return fetch(`${import.meta.env.VITE_API_URL}/api/chats/${data._id}`, {
                method:"PUT",
                credentials:"include",
                headers:{
                    "Content-Type":"application/json",
                },
                body: JSON.stringify({ question: question.length ? question: undefined,
                    answer,
                    img: img.dbData?.filePath || undefined,
                }),
            }).then(res => res.json());
        },
        onSuccess: (id) => {
          // Invalidate and refetch
          queryClient.invalidateQueries({ queryKey: ["chat", data._id] }).then(() => {
            setQuestion("");
            setAnswer("");
            setImg({
                isLoading: false,
                error:"",
                dbData:{},
                aiData:{},});
          });
        },
      });

        const add = async (text) => {
            setQuestion(text)

            const result = await chat.sendMessageStream(Object.entries(img.aiData).length ? [img.aiData, text] : [text]);

            let accumulatedText = "";
            for await (const chunk of result.stream) {
                const chunkText = chunk.text();
                console.log(chunkText);
                accumulatedText += chunkText;
                setAnswer(accumulatedText);
            }

            setImg({isLoading: false, error:"", dbData:{}, aiData:{}});
        };

        const handleSubmit = async (e) => {
            e.preventDefault()

            const text = e.target.text.value;
            if (!text) return;

            add(text)

            

        };

    return (

        <>
        {img.isLoading && <div className="">Loading...</div>}
        {img.dbData?.filePath && (
            <IKImage
                urlEndpoint={import.meta.env.VITE_IMAGE_KIT_ENDPOINT}
                path={img.dbData?.filePath}
                width="380"
                transformation={[{width: 380 }]}
            />
        )} 

        {question && <div className="message user"><Markdown>{question}</Markdown></div>}
        {answer && <div className="message"><Markdown>{answer}</Markdown></div>}
        
        <div className="endChat" ref={endRef}></div>

            <form className='newForm' onSubmit={handleSubmit}>
                <Upload setImg={setImg}/>
                <input id="file" type="file" multiple={false} hidden/>
                <input type="text" name="text" placeholder='Ask anything...'/>
                <button>
                    <img src="/arrow.png" alt="" />
                </button>
            </form>
        </>
    );
};


export default NewPrompt
