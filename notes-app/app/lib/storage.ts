import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3'

const s3 = new S3Client({

    region: process.env.AWS_REGION!,
    endpoint: process.env.AWS_ENDPOINT_URL_S3!,
    credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
    },
    forcePathStyle: true,
    requestChecksumCalculation: "WHEN_REQUIRED",
})

export async function uploadImage(file: File) {

    console.log("S3 env check:", {
        region: !!process.env.AWS_REGION,
        endpoint: !!process.env.AWS_ENDPOINT_URL_S3,
        accessKey: !!process.env.AWS_ACCESS_KEY_ID,
        secretKey: !!process.env.AWS_SECRET_ACCESS_KEY,
    });

    const buffer = Buffer.from(await file.arrayBuffer())

    const key = `${Date.now()}-${file.name}`

    await s3.send(
        new PutObjectCommand({
            Bucket: 'lifelist-images',
            Key: key,
            Body: buffer,
            ContentType: file.type,
        })
    )

    return `${process.env.AWS_ENDPOINT_URL_S3}/lifelist-images/${key}`
}