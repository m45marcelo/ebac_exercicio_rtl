import { fireEvent, render, screen } from "@testing-library/react";
import Post from "./../Post/index";
import PostComment from "./index";

describe("Teste para o componente PostComment", () => {
    it("Deve renderizar o componente corretamente", () => {
        render(<PostComment />);
        expect(screen.getByText("Comentar")).toBeInTheDocument();
    });

    it("Deve adicionar 2 contarios", () => {
        render(
            <Post imageUrl="https://www.orangeboxminiaturas.com.br/img/products/batmovel-1989-figura-batman-em-metal-jada-toys-1-24-jad-98260_1_1000.jpg">
                Olha só que legal minha miniatura do Batmóvel.
            </Post>
        );
        fireEvent.change(screen.getByTestId("input-comentario"), {
            target: {
                value: "muito bom",
            },
        });
        fireEvent.click(screen.getByTestId("btn-comentario"));

        fireEvent.change(screen.getByTestId("input-comentario"), {
            target: {
                value: "top demais",
            },
        });
        fireEvent.click(screen.getByTestId("btn-comentario"));

        expect(screen.getByText("muito bom")).toBeInTheDocument();
        expect(screen.getByText("top demais")).toBeInTheDocument();
    });
});
