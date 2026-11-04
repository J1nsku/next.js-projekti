const buckets = [
    { id: 1, content: 'Travel'},
    { id: 2, content: 'Adventure'},
]

let nextId = 3

export const getBuckets = () => {
    return buckets
}

export const addBucket = (content: string) => {
    buckets.push({ id: nextId++, content })
}

export const getBucketById = (id: number) => {
    return buckets.find((bucket) => bucket.id === id)
}

export const toggleImportance = (id: number) => {
    const bucket = buckets.find((bucket) => bucket.id === id)
}
