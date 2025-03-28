import React from "react";
import { Box, Flex } from "rebass";
import { Space } from "antd"
import { InstagramOutlined, YoutubeOutlined, DiscordOutlined, LinkedinOutlined } from "@ant-design/icons"

const FooteerContent = () => {
    return (
        <Box>
            <Box>
                En Iyi Tekliflere Simdi Ulas
            </Box>
            <Flex my={2} justifyContent={'center'} alignContent={'center'}>
                <Space size={[8, 16]}>
                    <a href='https://www.instagram.com/hyperteknoloji/#'> <InstagramOutlined style={{ color: "#F6E8D4" }} /> </a>

                    <a href='https://www.youtube.com/@hyperteknoloji'> <YoutubeOutlined style={{ color: "#F6E8D4" }} /> </a>

                    <a href='https://discord.gg/hyperteknoloji'> <DiscordOutlined style={{ color: "#F6E8D4" }} /> </a>

                    <a href='https://www.linkedin.com/in/kaan-yapar-884355228/'> <LinkedinOutlined style={{ color: "#F6E8D4" }} /> </a>
                </Space>
            </Flex>
        </Box>
    )
}

export default FooteerContent