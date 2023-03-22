// import useState from 'react'

// function EditPostForm({ post, onSubmit }) {
//     const [formData, setFormData] = useState({
//     //   restaurant_name: post.restaurant_name,
//     //   city: post.city,
//     //   state: post.state,
//     //   description: post.description,
//     //   image: post.image,
//     //   address: post.address,
//     //   cusine: post.cusine
//     });
  
//     const handleChange = (event) => {
//       setFormData({
//         ...formData,
//         [event.target.name]: event.target.value
//       });
//     };
  
//     const handleSubmit = (event) => {
//       event.preventDefault();
//       onSubmit(formData);
//     };
  
//     return (
//       <form onSubmit={handleSubmit}>
//         <label>
//           Restaurant Name:
//           <input type="text" name="restaurant_name" value={formData.restaurant_name} onChange={handleChange} />
//         </label>
//         <label>
//           City:
//           <input type="text" name="city" value={formData.city} onChange={handleChange} />
//         </label>
//         <label>
//           State:
//           <input type="text" name="state" value={formData.state} onChange={handleChange} />
//         </label>
//         <label>
//           Description:
//           <textarea name="description" value={formData.description} onChange={handleChange} />
//         </label>
//         <label>
//           Image:
//           <input type="text" name="image" value={formData.image} onChange={handleChange} />
//         </label>
//         <label>
//           Address:
//           <input type="text" name="address" value={formData.address} onChange={handleChange} />
//         </label>
//         <label>
//           Cuisine:
//           <input type="text" name="cuisine" value={formData.cuisine} onChange={handleChange} />
//         </label>
//         <button type="submit">Save Changes</button>
//       </form>
//     );
//   }


// export default EditPostForm 