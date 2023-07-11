import useStore from "remote/store";

export default function Bottom() {
    const [count, ] = useStore();

    return <div>
        Paycard Module
        <div>
            count is {count}
        </div>
    </div>
}