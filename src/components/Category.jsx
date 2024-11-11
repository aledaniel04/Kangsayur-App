import React, { useState } from 'react';
import Vegetales from '../assets/Vegetales.png';
import Frutas from '../assets/Frutas.png';
import Carne from '../assets/Carne.png';
import Huevo from '../assets/Huevo.png';
import Bebida from '../assets/Bebida.png';
import Panaderia from '../assets/Panaderia.png';
import Todo from '../assets/Todas.avif';

export const Category = ({ selectCategory }) => {
    const [selectedIndex, setSelectedIndex] = useState(null);

    const categories = [
        { label: 'All', value: '', img: Todo},
        { label: 'Vegetales', value: 'vegetales', img: Vegetales },
        { label: 'Frutas', value: 'frutas', img: Frutas },
        { label: 'Carne', value: 'carne', img: Carne },
        { label: 'Bebidas', value: 'bebidas', img: Bebida },
        { label: 'Panaderia', value: 'panaderia', img: Panaderia },
    ];

    const handleClick = (index, value) => {
        setSelectedIndex(index);
        selectCategory(value);
    };

    return (
        <div className='flex gap-4 justify-between hide-scrollbar ms-2 mt-4 items-center'>
            {categories.map((category, index) => (
                <button key={index} onClick={() => handleClick(index, category.value)}>
                    <div
                        className={`rounded-xl w-16 flex justify-center h-14 p-2 bg-[#4CAD7333] ${selectedIndex === index ? 'border-2 border-green-700' : ''}`}
                    >
                        {Array.isArray(category.img) ? (
                            <div className='flex flex-col items-center'>
                                <img className='w-8' src={category.img[0]} alt="" />
                                <img className='w-6' src={category.img[1]} alt="" />
                            </div>
                        ) : (
                            <img src={category.img} alt="" />
                        )}
                    </div>
                    <p className='font-normal text-[13px] text-[#333333] mt-1'>{category.label}</p>
                </button>
            ))}
        </div>
    );
};
