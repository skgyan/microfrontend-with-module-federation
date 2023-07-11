import useStore from "remote/store";

export default function Bottom() {
    const [count, ] = useStore();

    return <div>
        Second Module
        <div>
            count is {count}
        </div>
    </div>
}