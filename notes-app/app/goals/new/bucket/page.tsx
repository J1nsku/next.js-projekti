import { createBucket } from "@/app/actions/buckets"

const NewBucket = () => {
    return (
        <div>
            <h2> Create new bucket </h2>
            <form action={createBucket}>
                <div>
                    <label>
                        Bucket name
                        <input type="text" name="content" required />
                    </label>
                </div>
                <button type="submit">
                    Create bucket
                </button>
            </form>
        </div>
    )
}

export default NewBucket