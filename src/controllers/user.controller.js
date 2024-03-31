import { ApiError } from "../utils/ApiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { User } from "../models/user.model.js";
import { ApiResponse } from "../utils/ApiResponse.js";

const registerUser = asyncHandler(async(req, res) => {
    // res.status(200).json({
    //     message: "ok"
    // })

    // get the details from front end
    const {fullName, username, email, password } = req.body
    console.log("fullName:", fullName)
    console.log("username:", username)
    console.log("email:", email)
    console.log("password:", password)

    // validate the received details
    if (
        [fullName, username, email, password].some((field) => (field !== null && field !== undefined && field.trim() === "")) // checks if any field is empty
    ) {
        throw new ApiError(400, "All fields are required")
    }
    // some more validations

    // check if user already exist or not
    const userExist = await User.findOne({
        $or: [{ username }, { email }]
    })

    if (userExist) {
        throw new ApiError(409, "User with email or username already exists")
    }

    const user = await User.create({
        fullName,
        username,
        email,
        password,
    })

    const userCreated = await User.findById(user._id).select(
        "-password -refreshToken"
    )

    if (!userCreated) {
        throw new ApiError(500, "something went wrong while registering the user")
    }

    res.status(201).json(
        new ApiResponse(200, userCreated, "User Registerd Successfully")
    )

})

export { registerUser }