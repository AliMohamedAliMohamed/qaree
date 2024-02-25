import React from 'react';
import mm from './Screenshot 2024-02-20 131403.png'
import xx from './Screenshot 2024-02-20 131631.png'
const Slider = () => {
    return (
      <div>
        <div className="flex items-center ">
            <p className="mr-52 ml-20 max-w-96 text-xl text-slate-600">
              lulu was out for her usual morning walk when she took a wrong turn
              and found herself in the woods. She tried to retrace her steps,
              but soon realized she was lost. She began to panic, but then she
              remembered her training and started using her nose to sniff out a
              way home. She met all kinds of creatures along the way, but she
              was too scared to speak to them. Eventually, her nose led her to a
              house made of dog treats. It looked delicious, but she knew better
              than to eat anything she found in the woods. Suddenly, an evil
              witch appeared and tried to trap Lulu in the house. But Lulu was
              too smart for her and used her nose to find the door and escape.
              She was finally home safe and sound, and she vowed never to wander
              off the path again.
            </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src={xx}
              alt=""
              className="rounded-3xl border-slate-400 ml-80 mt-16"
            />
            <img
              src={mm}
              alt=""
              className="rounded-3xl border-slate-400 mt-6 "
            />
          </div>
        </div>
        <div></div>
      </div>
    );
}
 
export default Slider;