import { ref, set } from "firebase/database";
import React, { useState } from "react";
import { v4 } from "uuid";
import { useNavigate } from "react-router-dom";

const AddRooms = () => {
  const navigate = useNavigate();
  const uid = v4();

  const [name, setName] = useState("");
  const [type, settype] = useState("");
  const [price, setprice] = useState(0);
  const [size, setsize] = useState(0);
  const [capacity, setcapacity] = useState(1);
  const [image1, setImage1] = useState("");
  const [image2, setImage2] = useState("");
  const [image3, setImage3] = useState("");
  const [image4, setImage4] = useState("");

  const addRoomToFirebase = () => {
    if (
      name &&
      type &&
      price &&
      size &&
      image1 &&
      image2 &&
      image3 &&
      image4
    ) {
      set(ref(`hotels/${uid}`), {
        sys: {
          id: uid,
        },
        fields: {
          name,
          slug: uid.toString(),
          type,
          price,
          size,
          capacity,
          images: [
            {
              fields: {
                file: {
                  url: image1,
                },
              },
            },
            {
              fields: {
                file: {
                  url: image2,
                },
              },
            },
            {
              fields: {
                file: {
                  url: image3,
                },
              },
            },
            {
              fields: {
                file: {
                  url: image4,
                },
              },
            },
          ],
        },
      }).then(() => {
        alert("Room Added!");
        setName("");
        setImage1("");
        setImage2("");
        setImage3("");
        setImage4("");

        navigate("/rooms");
      });
    } else {
      return alert("Please fill all required fields.");
    }
  };

  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-md-10 mx-auto col-12 card shadow-lg border-0 p-4">
          <div>
            <h1 className="display-4 text-center">Add Rooms</h1>
          </div>

          <div className="row my-4">
            <div className="col-md-12 col-12 my-auto">
              <div className="col-md-12 col-12 float-right">
                <form>
                  <div className="form-group">
                    <label htmlFor="name"> Room Name</label>
                    <input
                      type="text"
                      className="form-control"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      id="name"
                      placeholder="name"
                      required
                    />
                    
                    <label htmlFor="price">Price(R)</label>
                    <input
                      type="number"
                      value={price}
                      onChange={(e) => setprice(e.target.value)}
                      className="form-control"
                      required
                      id="price"
                      placeholder="Room price"
                    />
                    <label htmlFor="size">Size</label>
                    <input
                      type="number"
                      className="form-control"
                      value={size}
                      onChange={(e) => setsize(e.target.value)}
                      required
                      id="size"
                      placeholder="Room Size"
                    />
                    <label htmlFor="capacity">Capacity</label>
                    <input
                      type="number"
                      value={capacity}
                      onChange={(e) => setcapacity(e.target.value)}
                      className="form-control"
                      required
                      id="capacity"
                      placeholder="Capacitiy"
                    />
          
             
                       <label htmlFor="img2">Image 1</label> 
                    <input
                      type="text"
                      value={image1}
                      onChange={(e) => setImage1(e.target.value)}
                      className="form-control"
                      id="img1"
                      placeholder="Image 1 URL"
                      required
                    />
                    <label htmlFor="img2">Image 2</label>
                    <input
                      type="text"
                      className="form-control"
                      value={image2}
                      onChange={(e) => setImage2(e.target.value)}
                      id="img2"
                      placeholder="Image 2 URL"
                      required
                    />

                    <label htmlFor="img3">Image 3</label>
                    <input
                      type="text"
                      value={image3}
                      onChange={(e) => setImage3(e.target.value)}
                      className="form-control"
                      id="img3"
                      placeholder="Image 3 URL"
                      required
                    />

                    <label htmlFor="img4">Image 4</label>
                    <input
                      type="text"
                      value={image4}
                      onChange={(e) => setImage4(e.target.value)}
                      className="form-control"
                      id="img4"
                      placeholder="Image 4 URL"
                      required
                    />
                  </div>

                  <div className="form-group form-check"></div>
                </form>
                <button
                  className="btn btn-block btn-outline-primary"
                  onClick={addRoomToFirebase}
                >
                  ADD ROOM
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddRooms;