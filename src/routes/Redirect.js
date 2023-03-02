import axios from "axios";
import { useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Loading from "../components/Loading";
import { AuthContext } from "../contexts/authContext";

function Redirect() {
	const { shortUrl } = useParams();
    const { setRedirect } = useContext(AuthContext);
    const navigate = useNavigate();
    console.log(shortUrl);
    useEffect(() => {
        async function getLink() {
            try{
                await axios.get("urls/open/"+shortUrl);
                window.location.href = process.env.REACT_APP_API_URL+"urls/open/"+ shortUrl;
            } catch(e){
                console.log(e);
                alert("Erro ao redirecionar");
                setRedirect(false);
                navigate("/");
            }
        }
        setRedirect(true);
        getLink();
        
    }, [setRedirect, shortUrl, navigate]);
	return <Loading />;
}

export default Redirect;
