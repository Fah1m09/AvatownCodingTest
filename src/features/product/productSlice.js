import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [
    {
      id: 1,
      img: "avatarPictures/VRCimageA(F).png",
      name: "Avatar name",
      rating: 5,
      likes: 100,
      price: 50,
      autoUpload: false,
      gender: "female",
      polygon: 33000,
      content: "PC",
    },
    {
      id: 2,
      img: "avatarPictures/VRCimageB(F).png",
      name: "Avatar name 2",
      rating: 3.7,
      likes: 30,
      price: 50,
      autoUpload: true,
      gender: "female",
      polygon: 33000,
      content: "Quest",
    },
    {
      id: 3,
      img: "avatarPictures/VRCimageC(M).png",
      name: "Avatar name 3",
      rating: 4,
      likes: 100,
      price: 50,
      autoUpload: false,
      gender: "male",
      polygon: 3000,
      content: "PC",
    },
    {
      id: 4,
      img: "avatarPictures/VRCimageD(F).png",
      name: "Avatar name 4",
      rating: 4.7,
      likes: 0,
      price: 30,
      autoUpload: true,
      gender: "female",
      polygon: 12000,
      content: "Quest",
    },
    {
      id: 5,
      img: "avatarPictures/VRCimageE(M).png",
      name: "Avatar name 5",
      rating: 4.7,
      likes: 0,
      price: 30,
      autoUpload: true,
      gender: "male",
      polygon: 43000,
      content: "Quest",
    },
    {
      id: 6,
      img: "avatarPictures/VRCimageF(F).png",
      name: "Avatar name 6",
      rating: 4.7,
      likes: 0,
      price: 30,
      autoUpload: true,
      gender: "female",
      polygon: 33000,
      content: "Quest",
    },
    {
      id: 7,
      img: "avatarPictures/VRCimageG(F).png",
      name: "Avatar name 7",
      rating: 4.7,
      likes: 0,
      price: 30,
      autoUpload: true,
      gender: "female",
      polygon: 13000,
      content: "Quest",
    },
    {
      id: 8,
      img: "avatarPictures/VRCimageH(F).png",
      name: "Avatar name 8",
      rating: 4.7,
      likes: 0,
      price: 30,
      autoUpload: true,
      gender: "female",
      polygon: 55000,
      content: "Quest",
    },
    {
      id: 9,
      img: "avatarPictures/VRCimageI(F).png",
      name: "Avatar name 9",
      rating: 4.7,
      likes: 0,
      price: 30,
      autoUpload: true,
      gender: "female",
      polygon: 33000,
      content: "Quest",
    },
    {
      id: 10,
      img: "avatarPictures/VRCimageJ(M).png",
      name: "Avatar name 10",
      rating: 4.7,
      likes: 0,
      price: 30,
      autoUpload: true,
      gender: "male",
      polygon: 33000,
      content: "Quest",
    },
    {
      id: 11,
      img: "avatarPictures/VRCimageK(M).png",
      name: "Avatar name",
      rating: 5,
      likes: 100,
      price: 50,
      autoUpload: false,
      gender: "male",
      polygon: 33000,
      content: "PC",
    },
    {
      id: 12,
      img: "avatarPictures/VRCimageL(F).png",
      name: "Avatar name 12",
      rating: 3.7,
      likes: 30,
      price: 50,
      autoUpload: true,
      gender: "female",
      polygon: 3000,
      content: "Quest",
    },
    {
      id: 13,
      img: "avatarPictures/VRCimageM(F).png",
      name: "Avatar name 13",
      rating: 4,
      likes: 100,
      price: 50,
      autoUpload: false,
      gender: "female",
      polygon: 18000,
      content: "PC",
    },
    {
      id: 14,
      img: "avatarPictures/VRCimageN(F).png",
      name: "Avatar name 14",
      rating: 4,
      likes: 0,
      price: 30,
      autoUpload: true,
      gender: "female",
      polygon: 25000,
      content: "Quest",
    },
    {
      id: 15,
      img: "avatarPictures/VRCimageO(F).png",
      name: "Avatar name 15",
      rating: 4.7,
      likes: 0,
      price: 11,
      autoUpload: true,
      gender: "female",
      polygon: 33000,
      content: "Quest",
    },
    {
      id: 16,
      img: "avatarPictures/VRCimageP(F).png",
      name: "Avatar name 16",
      rating: 4.7,
      likes: 0,
      price: 22,
      autoUpload: true,
      gender: "female",
      polygon: 33000,
      content: "Quest",
    },
    {
      id: 17,
      img: "avatarPictures/VRCimageQ(M).png",
      name: "Avatar name 17",
      rating: 2,
      likes: 0,
      price: 34,
      autoUpload: true,
      gender: "male",
      polygon: 21000,
      content: "Quest",
    },
    {
      id: 18,
      img: "avatarPictures/VRCimageR(F).png",
      name: "Avatar name 18",
      rating: 4.7,
      likes: 0,
      price: 30,
      autoUpload: true,
      polygon: 13000,
      gender: "female",
      content: "Quest",
    },
    {
      id: 19,
      img: "avatarPictures/VRCimageS(F).png",
      name: "Avatar name 19",
      rating: 4.7,
      likes: 0,
      price: 40,
      autoUpload: true,
      gender: "female",
      polygon: 300,
      content: "Quest",
    },
    {
      id: 20,
      img: "avatarPictures/VRCimageT(F).png",
      name: "Avatar name 20",
      rating: 4.7,
      likes: 0,
      price: 50,
      autoUpload: true,
      gender: "female",
      polygon: 33000,
      content: "Quest",
    },
  ],
  typeFilter: "All",
  isLoading: false,
  isError: false,
  isSuccess: false,
  error: "",
  editing: {},
};

// create slice
const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    editActive: (state, action) => {
      state.editing = action.payload;
    },
    editInActive: (state) => {
      state.editing = {};
    },
    changeTypeFilter: (state, action) => {
      state.typeFilter = action.payload;
    },
  },
});

export default productSlice.reducer;
export const { editActive, editInActive, changeTypeFilter } =
  productSlice.actions;