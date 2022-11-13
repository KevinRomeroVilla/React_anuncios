import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../common/Button";
import FormField from "../common/FormField";
import FormFieldNumber from "../common/FormFieldNumber";
import Page from "../layout/Page";
import { createAdvert } from "./service";

const formData = new FormData();
const NewAdvertsPage = (props) => {
  const [name, setName] = useState("");
  const [sale, setSale] = useState(true);
  const [price, setPrice] = useState("");
  const [tags, setTags] = useState([]);
  const [photo, setPhoto] = useState(null);
  const navigate = useNavigate();

  const handleChangeName = (event) => setName(event.target.value);
  const handleChangeSell = (event) => setSale(event.target.value);
  const handleChangePrice = (event) => setPrice(event.target.value);
  const handleTags = (event) =>
    setTags((prevTags) => [...prevTags, event.target.value]);

  const handleImage = (event) => setPhoto(event.target.files);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      formData.append("name", name);
      formData.append("sale", sale);
      formData.append("price", price);
      formData.append("tags", tags);
      if (photo === null) {
      } else {
        formData.append("photo", photo[0], { type: "image/jpeg" });
      }
      const createNewAdvert = await createAdvert(formData);
      navigate(`/adverts/${createNewAdvert.id}`);
    } catch (error) {
      if (error.status === 401) {
        navigate("/login");
      }
    }
  };

  return (
    <Page>
      <div className='newAdvertPage bordered'>
        <div className='left'>photo</div>
        <div className='right'>
          <form onSubmit={handleSubmit}>
            <FormField
              type='text'
              name='name'
              label='object name'
              className='loginForm-field'
              onChange={handleChangeName}
              value={name}
            />
            <div>
              <span>Do you want to buy or sell the objet?</span>
              <select onChange={handleChangeSell} value={sale}>
                <option value={true}>Sell</option>
                <option value={false}>Buy</option>
              </select>
            </div>
            <FormFieldNumber
              type='number'
              name='price'
              label='objet price'
              className='numberForm-field'
              onChange={handleChangePrice}
              value={price}
            />
            <div>
              <div>
                <span>Select tags for your objet</span>
              </div>
              <span>Motor</span>
              <input type='radio' onChange={handleTags} value='motor'></input>
              <span>Work</span>
              <input type='radio' onChange={handleTags} value='work'></input>
              <span>Lifestyle</span>
              <input
                type='radio'
                onChange={handleTags}
                value='lifestyle'
              ></input>
              <span>Mobile</span>
              <input type='radio' onChange={handleTags} value='mobile'></input>
            </div>
            <div>
              <span>Image (not required)</span>
              <input type='file' onChange={handleImage} />
            </div>

            <div className='newAdvertPage-footer'>
              <span className='newAdvertPage-characters'></span>
              <Button
                type='submit'
                className='AdvertPage-submit'
                variant='primary'
              >
                Let's go!
              </Button>
            </div>
          </form>
        </div>
      </div>
    </Page>
  );
};

export default NewAdvertsPage;
