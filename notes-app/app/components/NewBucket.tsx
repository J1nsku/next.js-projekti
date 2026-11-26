
import { useState } from "react"
import { createBucket } from "@/app/actions/buckets"

const NewBucket = ({ onClose }: {
    onClose: () => void
}) => {
    return (
        <div>
            <form action={createBucket} className="modal-panel w-full max-w-[430px] rounded-[12px] border border-[#a88b7c]/25 bg-[#fffdfb] p-7 shadow-[0_22px_70px_rgba(65,42,32,0.2)]">
                <div className="mb-6 flex items-start justify-between">
                    <div>
                        <p className="mb-1 text-[10px] uppercase tracking-[0.2em] text-[#a37b68]">
                            Organize your dreams</p>
                        <h2 id="new-bucket-title" className="font-display text-3xl font-semibold text-[#8f624c]"> Add a New Bucket </h2>
                    </div>
                    <button type="button" className="grid h-8 w-8 place-items-center rounded-full bg-[#f3edeb] text-[#806a60]" onClick={() => onClose()}>
                        X
                    </button>
                </div>

                <label className="mb-6 block">
                    <span className="mb-1.5 block font-serif text-sm">Bucket name</span>
                    <input required placeholder="For example: Creative Projects"
                        className="w-full rounded-md border border-[#9c8275]/30 bg-white px-4 py-3 font-serif text-sm outline-none focus:border-[#9e6a52]"
                        type="text" name="content" />
                    <p className="mt-2 text-xs leading-relaxed text-[#927a6f]">Your new bucket will be available when you create a goal.</p>
                </label>

                <div className="flex gap-4">
                    <button type="submit" className="w-full rounded-md bg-[#9c6b54] py-3 font-serif text-sm text-white transition hover:bg-[#855844]">
                        Create Bucket
                    </button>
                </div>
            </form>
        </div>
    )
}

export default NewBucket