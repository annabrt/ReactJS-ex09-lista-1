function Nivel(props){
    return(props.Nivel === "Iniciante" 
    ? "Bem-vindo iniciante"
    : props.Nivel === "Intermediario"
    ? "Você está progredindo!"
    : props.Nivel === "Avançado"
    ? "parabens especialista!"
    : "Não possui nivel :("
)
}
export default Nivel