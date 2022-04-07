import {useState} from "react";
import { useNavigate } from "react-router-dom";

export default  function Mesa() {
    let navigate = useNavigate();

    const [nomeMesa, setNomeMesa] = useState('');

    const onClickMesa = () => {
        console.log('Mesa Salva!', nomeMesa);
        navigate("/lista");
    };

    const handleChangeNomeMesa = (v) => {
        setNomeMesa(v.target.value);
    };

        return(
            <div>
                <h2>Criar nova mesa</h2>
    
                <input
                    onChange={handleChangeNomeMesa}
                    type="text"
                    value={nomeMesa}
                    placeholder="Nome da mesa..."
                />
                <button  onClick={onClickMesa}>Salvar</button>
            </div>
        );
    };
//}