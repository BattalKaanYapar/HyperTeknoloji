import './App.css';
import React from "react";
import { Layout } from 'antd';
import { Box } from 'rebass';
import MenuContent from "./components/menu/menuContent"
import FooteerContent from "./components/footer/footerContent"
import ContainerContent from "./components/content/containerContent"


const { Header, Content, Footer } = Layout;


const App = () => {
  return (
    <div className="App">
      <Layout style={{ height: "100%", padding: "20px", backgroundColor: "#161A21" }} >
        <Header style={{ paddingInline: "20px", backgroundColor: "#001529", borderRadius: "5px", color: "#F6E8D4" }}>
          <MenuContent />
        </Header>
        <Content>

          <Box bg={"#001529"} my={2} p={4} style={{ borderRadius: "5px" }} >
            <ContainerContent />
          </Box>
        </Content>
        <Footer style={{ color: "#F6E8D4", alignContent: "flex-end", borderRadius: "5px", textAlign: 'center', fontFamily: "Poppins", fontWeight: 700, backgroundColor: "#001529", fontSize: "1.5em" }}>
          <FooteerContent />
        </Footer>
      </Layout>
    </div>
  );
}

export default App;
