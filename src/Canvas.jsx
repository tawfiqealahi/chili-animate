import React, { useEffect,useRef, useState } from 'react'
import canvasImage from './canvasImage'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap/src';

const Canvas = () => {
  const [index,setIndex]=useState({value:0})
  const canvasRef =useRef(null);

  useGSAP(()=>{
    gsap.to(index,{
      value: 140,
      duration: 3,
      ease: " linear",
      repeat: -1,
      onUpdate: ()=>{
        setIndex({value:Math.round(index.value)})
      }
    })
  })

  
  useEffect(()=>{
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const img = new Image();
    img.src =canvasImage[index.value];
    img.onload=()=>{
      canvas.width = img.width;
      canvas.height =img.height;
      ctx.drawImage(img, 0 , 0);
    };     
    },[index])
  return (
    <canvas className=' w-30; h-30' ref={canvasRef} id='canvas'>Canvas ki hbe

    </canvas>
  )
}

export default Canvas;