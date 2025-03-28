import React, { useState } from "react";
import { Flex, Image } from "rebass";
import hyperLogo from "../../images/hyperLogo.webp"
import { Menu } from 'antd';
const items = [
    {
        label: 'League Of Legends',
        key: 'lol',
    },
    {
        label: 'Knight Online',
        key: 'ko',
    },
    {
        label: 'Iletisim',
        key: 'contact',
        children: [
            {
                type: 'group',
                label: 'Instagram',
                children: [
                    { label: 'Kaan', key: 'kaan' },
                ],
            },
        ],
    },
];
const MenuContent = () => {

    const [current, setCurrent] = useState('mail');
    const onClick = e => {
        console.log('click ', e);
        setCurrent(e.key);
    };

    return (
        <Flex alignItems={'center'} width={1} >
            <Image preview={false} src={hyperLogo} width={144} height={39} />
            <Flex justifyContent={'space-evenly'} width={1} >
                <Menu id="menuItem" theme="dark"
                    onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />
            </Flex>
        </Flex>
    )
}
export default MenuContent