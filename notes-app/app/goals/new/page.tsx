// "use client"

// import { useState, useEffect, ChangeEvent } from "react"
// import { createGoal } from "../../actions/goals"

// const NewGoal = () => {

//     const [imageUrl, setImageUrl] = useState<string | null>(null)

//     const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
//         if (e.target.files?.[0]) {
//             setImageUrl(URL.createObjectURL(e.target.files[0]))
//         }
//     }



//     return (
//         <div>
//             <h2> Create new goal </h2>
//             <form action={createGoal}>
//                 <div>
//                     <label>
//                         Goal
//                         <input type="text" name="content" required />
//                     </label>
//                 </div>
//                 <div>
//                     <label>
//                         Picture
//                         <input type="file"
//                             name="image"
//                             accept="image/*" required
//                             onChange={handleImageChange} />
//                         {imageUrl && <img src={imageUrl} alt="Uploaded image"
//                             width={200} height={200} />}
//                     </label>
//                 </div>
//                 <button type="submit">
//                     Create
//                 </button>
//             </form>
//         </div>
//     )
// }

// export default NewGoal