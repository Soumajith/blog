import { useState } from "react";
import { useFormik } from "formik";
import "./Post.css";
import { URL } from "../../utils/helper";

const AddPost = () => {
  const [file, setFile] = useState(null);

  const formik = useFormik({
    initialValues: {
      title: "",
      body: "",
      photo: "",
    },
    onSubmit: (values) => {
      //   values.file = file;
      console.log(values);
      const formData = new FormData();
      for (let value in values) {
        console.log(value, values[value]);
        formData.append(value, values[value]);
      }
      upload(formData);
    },
  });

  const upload = async (data) => {
    const response = await fetch(URL + "/posts/create", {
      method: "POST",
      body: data,
    });

    const responseData = await response.json();
    console.log(responseData);
  };
  const handleChanges = (e) => {
    // console.log(e.target.files);
    // setFile(URL.createObjectURL(e.target.files[0]));
    // console.log(file);

    let reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);

    reader.onload = () => {
      setFile(reader.result);
    };

    console.log(file);
  };

  return (
    <div className="wrapper-post">
      <div className="add-post">
        <h3 className="post-head">Add Post</h3>
        <form onSubmit={formik.handleSubmit}>
          <div className="input-fields">
            <label>Title</label>
            <input
              className="input"
              id="title"
              name="title"
              onChange={formik.handleChange}
              value={formik.values.title}
              placeholder="Title"
            />
          </div>
          <div className="input-fields">
            <label>Body</label>
            <textarea
              className="input input-body"
              id="body"
              name="body"
              onChange={formik.handleChange}
              value={formik.values.body}
              placeholder="Body"
            />
          </div>
          <div className="img-add">
            <p>Add Image</p>
            <input
              type="file"
              name="photo"
              onChange={(e) => {
                formik.setFieldValue("photo", e.currentTarget.files[0]);
                setFile(e.currentTarget.files[0]);
              }}
            />
            {file ? <img src={file} height={"100px"} /> : null}
          </div>
          <button className="button-64" type="submit">
            <span className="text">Publish</span>
          </button>
        </form>
      </div>
    </div>
  );
};
export default AddPost;
