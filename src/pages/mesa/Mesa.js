import { useState} from "react";
import { useNavigate } from "react-router-dom";

import API from "../../services/Api";

export default  function Mesa() {
    let navigate = useNavigate();

    const [nomeMesa, setNomeMesa] = useState('');

    const onSubmit = async (e) => {
        e.preventDefault();
        const novaMesa = {nome_mesa: nomeMesa};

        const mesa = await API.post("/mesas", novaMesa);
        console.log(mesa);

        navigate(`/lista/${mesa.data[0].id_mesa}`);
        //navigate('/lista');
    };

    const handleChangeNomeMesa = (v) => {
        setNomeMesa(v.target.value);
    };

        return(
            <div>
                <h2>Criar nova mesa</h2>
    
                <form onSubmit={onSubmit}>
                    <input
                        onChange={handleChangeNomeMesa}
                        type="text"
                        value={nomeMesa}
                        placeholder="Nome da mesa..."
                    />
                    <button type="submit">Salvar</button>
                </form>
            </div>
        );
    };
//}