import React from "react"
import { Flex } from "rebass"
import { Card } from "antd"
import lolRp from "../../images/lolRp.jpeg"
import knightCash from "../../images/knightCash.jpeg"
import knightPre from "../../images/knightPremium.jpeg"
import valoBp from "../../images/valoBp.jpeg"

const ContainerContent = () => {
    return (
        <Flex flexWrap={'wrap'} >
            <Card
                hoverable
                size="small"
                cover={
                    <img
                        alt="example"
                        src={lolRp}
                    />
                }

                style={{ width: 300, margin: "5px", backgroundColor: "#212630", color: "#fff" }}

            >
                <p>League of Legends 160 RP</p>
                <p>33.00TL</p>
                <p>League Of Legends 160 RP (Riot Points) satın aldığınızda Riot Game sitesinden etkinleştireceğiniz E-Pin kodu olarak teslim edilir.</p>
            </Card>
            <Card
                hoverable
                size="small"
                cover={
                    <img
                        alt="example"
                        src={knightCash}
                    />
                }

                style={{ width: 300, margin: "5px", backgroundColor: "#212630", color: "#fff" }}

            >
                <p>Knight Online 400 Cash</p>
                <p>400.00TL</p>
                <p>Knight Online 500 Cash satın aldığınızda, Oyun içi ve ya siteden direkt kullanılabilir (E-Pin) kodunu hemen teslim alırsınız.</p>
            </Card>
            <Card
                hoverable
                size="small"
                cover={
                    <img
                        alt="example"
                        src={valoBp}
                    />
                }

                style={{ width: 300, margin: "5px", backgroundColor: "#212630", color: "#fff" }}

            >
                <p>Valorant Battle Pass</p>
                <p>600.00TL</p>
                <p>Satın aldığınızda Riot Game sitesinden etkinleştireceğiniz E-Pin kodu olarak teslim edilir.</p>
            </Card>
            <Card
                hoverable
                size="small"
                cover={
                    <img
                        alt="example"
                        src={knightPre}
                    />
                }

                style={{ width: 300, margin: "5px", backgroundColor: "#212630", color: "#fff" }}

            >
                <p>Knight Online Bronz Pre</p>
                <p>425.00TL</p>
                <p>Knight Online Bronze Premium satın aldığınızda, NttGame sitesinden kullanılabilir (Npoint E-Pin) kodunu hemen teslim alırsınız..</p>
            </Card>
            <Card
                hoverable
                size="small"
                cover={
                    <img
                        alt="example"
                        src={lolRp}
                    />
                }

                style={{ width: 300, margin: "5px", backgroundColor: "#212630", color: "#fff" }}

            >
                <p>League of Legends 160 RP</p>
                <p>33.00TL</p>
                <p>League Of Legends 160 RP (Riot Points) satın aldığınızda Riot Game sitesinden etkinleştireceğiniz E-Pin kodu olarak teslim edilir.</p>
            </Card>
            <Card
                hoverable
                size="small"
                cover={
                    <img
                        alt="example"
                        src={knightCash}
                    />
                }

                style={{ width: 300, margin: "5px", backgroundColor: "#212630", color: "#fff" }}

            >
                <p>Knight Online 400 Cash</p>
                <p>400.00TL</p>
                <p>Knight Online 500 Cash satın aldığınızda, Oyun içi ve ya siteden direkt kullanılabilir (E-Pin) kodunu hemen teslim alırsınız.</p>
            </Card>
            <Card
                hoverable
                size="small"
                cover={
                    <img
                        alt="example"
                        src={valoBp}
                    />
                }

                style={{ width: 300, margin: "5px", backgroundColor: "#212630", color: "#fff" }}

            >
                <p>Valorant Battle Pass</p>
                <p>600.00TL</p>
                <p>Satın aldığınızda Riot Game sitesinden etkinleştireceğiniz E-Pin kodu olarak teslim edilir.</p>
            </Card>
            <Card
                hoverable
                size="small"
                cover={
                    <img
                        alt="example"
                        src={knightPre}
                    />
                }

                style={{ width: 300, margin: "5px", backgroundColor: "#212630", color: "#fff" }}

            >
                <p>Knight Online Bronz Pre</p>
                <p>425.00TL</p>
                <p>Knight Online Bronze Premium satın aldığınızda, NttGame sitesinden kullanılabilir (Npoint E-Pin) kodunu hemen teslim alırsınız..</p>
            </Card>



        </Flex>
    )
}

export default ContainerContent