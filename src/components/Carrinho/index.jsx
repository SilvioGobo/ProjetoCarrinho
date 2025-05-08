import './style.css'
import { useEffect,useState } from 'react';

export default function Carrinho({mostrarCarrinho, setMostrarCarrinho, carrinho, setCarrinho}){
    const [valorTotal, setValorTotal] = useState(0);
    const aumentarQtd = (nome) =>{
        const novoCarrinho = carrinho.map(
            (produto) => {
                if (produto.nome === nome){
                    return {...produto, quantidade: produto.quantidade +1};
                }
                return produto;
            }
        );
        setCarrinho(novoCarrinho);
    }

    useEffect(() => {
        const total = carrinho.reduce((soma, item) => soma + item.valor * item.quantidade, 0);
        setValorTotal(total);
      }, [carrinho]); // ← recalcula sempre que o carrinho mudar

    const diminuirQtd = (item) =>{
        const novoCarrinho = carrinho.map(
            (produto) => {
                if (produto.nome === item.nome){
                        return {...produto, quantidade: item.quantidade -1};
                }
                return produto; 
            }
        ).filter((item)=>item.quantidade>0);
        setCarrinho(novoCarrinho);
    }

    return(
        <>
            <div className='Header'>
                <p>Seu carrinho</p>
                <button onClick={() => setMostrarCarrinho(!mostrarCarrinho)}>X</button>
            </div>

            <div className='produtos'>
            {carrinho.length === 0 ? (
                <p>Carrinho vazio</p>
                ) : (     
                    <div className='items'>
                        {carrinho.map((item, index) => (
                            <div className="item">
                            <img src={item.imagem} alt="" />
                            <div className="descricao">
                                <p className='nome-produto'>{item.nome}</p>
                                <div className="precosection">
                                    <div className="preco">
                                        <p>RS {(item.valor*item.quantidade).toFixed(2)}</p>
                                    </div>
                                    <div className="botao">
                                        <button onClick={()=>diminuirQtd(item)}>-</button>
                                        <p>{item.quantidade}</p>
                                        <button onClick={()=>aumentarQtd(item.nome)}>+</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        ))}
                    </div>   
                    )
            }
            </div>

            <div className='footer'>
                <p>Valor total: {valorTotal.toFixed(2)}</p>
            </div>
        </>
    )
}