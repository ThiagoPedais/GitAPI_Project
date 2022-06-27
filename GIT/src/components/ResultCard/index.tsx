import './styles.scss';

type Props = {
    avatar: string;
    perfil: string;
    followers: number;
    locality: string;
    name: string;
}

const ResultCard = ({ avatar, perfil, followers, locality, name }: Props) => {

    return (
        <div className="result-container" >
            <div className="d-flex">
                <img src={avatar} alt="avatar" className="imgPerfil" />
                <div className="info">
                    <h1>Informações</h1>
                    <p>Perfil: {perfil}</p>
                    <p>Seguidores: {followers}</p>
                    <p>Localidade: {locality}</p>
                    <p>Nome: {name}</p>
                </div>

            </div>



        </div>
    );
}

export default ResultCard;