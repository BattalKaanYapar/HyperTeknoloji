import './App.css';
import React from "react";
import { Layout, Image, Card } from 'antd';
import { Box, Flex } from 'rebass';
import hyperLogo from "./logo/hyperLogo.webp"



const { Header, Content, Footer } = Layout;


const App = () => {

  return (
    <div className="App">
      <Layout style={{ height: "100%", padding: "20px", backgroundColor: "#161A21" }} >
        <Flex alignItems={'center'} justifyContent={'center'} fontSize={"1.5em"} color={"#fff"} my={2} p={3}>
          Hyper Teknoloji Frontend Case
        </Flex>
        <Header style={{ paddingInline: "20px", backgroundColor: "#434D5E", borderRadius: "5px" }}>
          <Image preview={false} src={hyperLogo} width={144} height={39} />
        </Header>
        <Content>
          <Box bg={"#434D5E"} my={2} p={4} color={"white"} style={{ borderRadius: "5px" }} >
            <Flex flexWrap={'wrap'} >
              <Card
                hoverable
                size="small"
                title="Valorant"
                cover={
                  <img
                    alt="example"
                    src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                  />
                }
                style={{ width: 300, margin: "5px" }}
              >
                <p>Urun nedir</p>
                <p>Urun Fiyati</p>
                <p>Urun Detayli Bilgisi</p>
              </Card>
              <Card
                hoverable
                size="small"
                title="Valorant"
                cover={
                  <img
                    alt="example"
                    src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                  />
                }
                style={{ width: 300, margin: "5px" }}
              >
                <p>Urun nedir</p>
                <p>Urun Fiyati</p>
                <p>Urun Detayli Bilgisi</p>
              </Card>
              <Card
                hoverable
                size="small"
                title="Valorant"
                cover={
                  <img
                    alt="example"
                    src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                  />
                }
                style={{ width: 300, margin: "5px" }}
              >
                <p>Urun nedir</p>
                <p>Urun Fiyati</p>
                <p>Urun Detayli Bilgisi</p>
              </Card>
              <Card
                hoverable
                size="small"
                title="Valorant"
                cover={
                  <img
                    alt="example"
                    src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                  />
                }
                style={{ width: 300, margin: "5px" }}
              >
                <p>Urun nedir</p>
                <p>Urun Fiyati</p>
                <p>Urun Detayli Bilgisi</p>
              </Card>
              <Card
                hoverable
                size="small"
                title="Valorant"
                cover={
                  <img
                    alt="example"
                    src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                  />
                }
                style={{ width: 300, margin: "5px" }}
              >
                <p>Urun nedir</p>
                <p>Urun Fiyati</p>
                <p>Urun Detayli Bilgisi</p>
              </Card>
              <Card
                hoverable
                size="small"
                title="Valorant"
                cover={
                  <img
                    alt="example"
                    src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                  />
                }
                style={{ width: 300, margin: "5px" }}
              >
                <p>Urun nedir</p>
                <p>Urun Fiyati</p>
                <p>Urun Detayli Bilgisi</p>
              </Card>
            </Flex>

          </Box>
        </Content>
        <Footer style={{ display: "flex", justifyContent: "center", alignContent: "flex-end", borderRadius: "5px", textAlign: 'center', fontFamily: "Poppins", fontWeight: 700, color: "#fff", backgroundColor: "#434D5E", fontSize: "1.5em" }}>
          En Iyi Tekliflere Simdi Ulas

        </Footer>
      </Layout>
    </div>
  );
}

export default App;
