# AI Face Shape and Personal Color Analysis

This project provides a Progressive Web App (PWA) built with React that allows users to upload a photo for AI-based face shape analysis and personal color diagnosis. The application utilizes TensorFlow and MediaPipe for image processing and analysis.

## Current Status

As of now, this project has been tested only on a local server environment. The backend server required for image processing and model inference has not been deployed yet, which means that the full functionality is not available on the live site [❤️here❤️](https://two-two22.github.io/react-with-pwa/).

## Features

- **Face Shape Analysis**: AI-based analysis of face shape using TensorFlow and MediaPipe.
- **Personal Color Diagnosis**: Determine the user's personal color palette based on the uploaded photo.
- **Progressive Web App**: Offline access and installation on mobile devices for a seamless user experience.

## Local Setup and Testing

To run this project locally and test its features, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/react-with-pwa.git
   cd react-with-pwa
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Start the local development server:**

   ```bash
   npm start
   ```

4. **Set up the backend server:**

   - Ensure you have Node.js and Python installed on your machine.
   - Create a `server.js` file and a `test.py` file as described in the project documentation.
   - Start the backend server by running:
     ```bash
     node server.js
     ```

5. **Access the application:**

   Open your web browser and navigate to `http://localhost:3000` to see the application in action.

## Future Plans

In future versions, we plan to implement and deploy a backend server to handle image processing and model inference, enabling the full functionality of the application on the live site. The backend will likely be developed using a cloud service such as AWS Lambda and API Gateway, or similar serverless architecture, to provide a scalable and efficient solution.

Our goals for future updates include:

- **Backend Deployment**: Deploy the backend server to handle requests from the frontend application.
- **API Integration**: Integrate the frontend with the deployed backend to enable full functionality for face shape analysis and personal color diagnosis.
- **Scalability**: Ensure the backend can handle multiple requests efficiently using serverless architecture.
- **Security**: Implement security measures to protect user data and ensure secure communication between the frontend and backend.

These enhancements will allow users to fully utilize the application's features directly from the live site, without needing to run a local server.

## Contributing

Contributions are welcome! If you have any ideas, suggestions, or bug reports, please open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.