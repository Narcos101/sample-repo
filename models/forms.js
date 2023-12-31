const mongoose = require('mongoose')

// {
//     "formId": "FORM_ID",
//     "info": {a
//       "title": "Famous Black Women",
//       "description": "Please complete this quiz based off of this week's readings for class.",
//       "documentTitle": "API Example Quiz"
//     },
//     "settings": {
//       "quizSettings": {
//         "isQuiz": true
//       }
//     },
//     "revisionId": "00000021",
//     "responderUri": "https://docs.google.com/forms/d/e/1FAIpQLSd0iBLPh4suZoGW938EU1WIxzObQv_jXto0nT2U8HH2KsI5dg/viewform",
//     "items": [
//       {
//         "itemId": "5d9f9786",
//         "imageItem": {
//           "image": {
//             "contentUri": "DIRECT_URL",
//             "properties": {
//               "alignment": "LEFT"
//             }
//           }
//         }
//       },
//       {
//         "itemId": "72b30353",
//         "title": "Which African American woman authored \"I Know Why the Caged Bird Sings\"?",
//         "questionItem": {
//           "question": {
//             "questionId": "25405d4e",
//             "required": true,
//             "grading": {
//               "pointValue": 2,
//               "correctAnswers": {
//                 "answers": [
//                   {
//                     "value": "Maya Angelou"
//                   }
//                 ]
//               }
//             },
//             "choiceQuestion": {
//               "type": "RADIO",
//               "options": [
//                 {
//                   "value": "Maya Angelou"
//                 },
//                 {
//                   "value": "bell hooks"
//                 },
//                 {
//                   "value": "Alice Walker"
//                 },
//                 {
//                   "value": "Roxane Gay"
//                 }
//               ]
//             }
//           }
//         }
//       },
//       {
//         "itemId": "0a4859c8",
//         "title": "Who was the first Dominican-American woman elected to state office?",
//         "questionItem": {
//           "question": {
//             "questionId": "37fff47a",
//             "grading": {
//               "pointValue": 2,
//               "correctAnswers": {
//                 "answers": [
//                   {
//                     "value": "Grace Diaz"
//                   }
//                 ]
//               }
//             },
//             "choiceQuestion": {
//               "type": "RADIO",
//               "options": [
//                 {
//                   "value": "Rosa Clemente"
//                 },
//                 {
//                   "value": "Grace Diaz"
//                 },
//                 {
//                   "value": "Juana Matias"
//                 },
//                 {
//                   "value": "Sabrina Matos"
//                 }
//               ]
//             }
//           }
//         }
//       }
//     ]
//   }

//     "settings": {
//       "quizSettings": {
//         "isQuiz": true
//       }
//     },

const optionSchema = new mongoose.Schema({
    value:String
})


const itemSchema = new mongoose.Schema({
    itemId:String,
    title:{
        type:String,
        default:"Unknown"
    },
    questionItem:{
        question:{
            questionId:String,
            imageItem: {
                image: {
                  contentUri: String
                }
            },
            required: Boolean,
            grading: {
                pointValue:Number,
                correctAnswers: {
                    answers: [
                        {
                            value:String
                        }
                    ]
                }
            },
            choiceQuestion: {
                options:[
                    {
                        value:String
                    }
                ]
            }
        }
    }
})


const formSchema = new mongoose.Schema({
    formId:String,
    info : {
        title:String,
        description:String,
        documentTitle:String
    },
    settings : {
        quizSettings:{
            isQuiz:Boolean
        }
    },
    responderUri:String,
    items:[itemSchema]
})  


module.exports = mongoose.model('forms', formSchema)