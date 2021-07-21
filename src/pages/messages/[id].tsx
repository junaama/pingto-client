import {useRouter} from "next/router";

const Message = () => {
    const router = useRouter();
    const {id} = router.query;

    return <p>Message: {id}</p>
}
export default Message;