import Image from "next/image";

export default function ({src}){
    return <div style={{borderRadius:"100%"}}><Image height={4} width={4} src={src} alt=""/></div>
}