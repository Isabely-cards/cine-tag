import Cabecalho from "./components/Cabecalho";
import Favoritos from "./pages/Favoritos";
import Inicio from "./pages/Inicio";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Rodape from "./components/Rodape";
import Container from "./components/Container";
import { FavoritosContext } from "./components/contextos/favoritos";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Cabecalho />
            <Container>
                <FavoritosContext>
                <Routes>
                    <Route path="/" element={<Inicio />}></Route>
                    <Route path="/favoritos" element={<Favoritos />}></Route>
                </Routes>
                </FavoritosContext>
            </Container>
            <Rodape />
        </BrowserRouter>
    )
}

export default AppRoutes;