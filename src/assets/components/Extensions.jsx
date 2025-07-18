import React from "react";
import Extensions from '@lib/GetExtensions.json';
import { Switch, ConfigProvider } from 'antd';
import { useState } from "react";


export default function GetExtensions({prevExtension,setExtension,filter}) {

    const filtredExtensions = prevExtension.filter(item => {
        if(filter === 'active') return item.isActive;
        if(filter === 'inactive') return !item.isActive;
        return true;
    });

    function deleteExtension(id) {
        setExtension(filtredExtensions => filtredExtensions.filter(item => item.id !== id))
    }

    const onChange = (checked, id) => {
        setExtension(prevExtension => {
            return prevExtension.map(item => {
                item.id === id ? item = {...item, isActive: checked} : item;
                return item;
            })
        });
    }

    return (
        <>
        {filtredExtensions.map((item, index) => {
            return (
                <div key={item.id} className="rounded-2xl border-[1px] p-3 flex flex-col gap-4 shadow-lg shadow-[#000]/10 dark:shadow-[#fff]/10 dark:bg-gray-600/30 dark:border-white/10 bg-white border-gray-300/30">
                    <div className="flex gap-3">
                        <img src={item.logo} className="h-14 w-auto" alt={item.name}/>
                        <div className="flex flex-col gap-2">
                            <h5 className="text-xl dark:text-white text-[#030c2d] font-bold">{item.name}</h5>
                            <p className="mb-0 dark:text-white text-[#030c2d]">{item.description}</p>
                        </div>
                    </div>
                    <div className="flex flex-row flex-wrap items-center gap-2 justify-between">
                        <button onClick={() => deleteExtension(item.id)} type="button" className="cursor-pointer dark:text-white text-md rounded-3xl border-[1px] p-2 px-4 duration-300 border-gray-600/30 hover:bg-gray-300 dark:border-white/30 dark:hover:bg-white/30">Remove</button>
                        <ConfigProvider
                            theme={{
                                token: {
                                    colorPrimary: '#c92520',
                                }
                            }}
                        >
                        <Switch defaultChecked={item.isActive} onChange={(e) => onChange(e,item.id)} />
                        </ConfigProvider>
                    </div>
                </div>
            )
        })}
        </>
    )
}