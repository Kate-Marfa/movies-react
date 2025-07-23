import React, {useEffect} from "react";
import { useNavigate } from "react-router-dom";

const TvShowRedirect = () => {
    const navigate = useNavigate();

    useEffect(() => {
        alert('This page is under construction.');
            navigate("/")
    }, [navigate]);
    return null;
}

export default TvShowRedirect;