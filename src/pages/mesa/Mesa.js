import { useState} from "react";
import { useNavigate } from "react-router-dom";

import API from "../../services/Api";

export default  function Mesa() {
    let navigate = useNavigate();

    const [nomeMesa, setNomeMesa] = useState('');

    const onSubmit = async (e) => {
        e.preventDefault();
        const novaMesa = {nome: nomeMesa};

        const mesa = await API.post("/mesas", novaMesa);
        console.log(mesa);

        navigate(`/lista/${mesa.data[0].id}`);
        //navigate('/lista');
    };

    const handleChangeNomeMesa = (v) => {
        setNomeMesa(v.target.value);
    };

        return(
            <>
                <h2 className="is-flex is-justify-content-center title m-4">Criar nova mesa</h2>
                <div className="is-flex is-justify-content-center"> 
                    <form className="columns m-4" onSubmit={onSubmit}>

                        <input className="input is-4"
                            onChange={handleChangeNomeMesa}
                            type="text"
                            value={nomeMesa}
                            placeholder="Nome da mesa..."
                        />
                        <button className="button is-success is-1 ml-4" type="submit">Salvar</button>
                    </form>
                </div>
            </>
        );
    };
//}