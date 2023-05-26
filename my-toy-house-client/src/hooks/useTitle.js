import { useEffect } from "react"

const useTitle = (title) => {
    useEffect(()=>{
        document.title = `${title} - Action Figure Toys`;
    }, [title])
}

export default useTitle;