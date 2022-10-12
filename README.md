# Quizy Dude

A online quiz application. Anyone can give a test here to justify his/her knowledge on various topics. This project is built on learning purpose.

## Features

- Mode: Suitable for both ligh/dark mode
- Quiz Topics: A bunch of quizes on different topics. You can choose your favourite topic.
- Live practice: You can start practice instantly.
- Blog: Updated informative lessons will be published in blog section.
- Responsive: Responsive for both mobile, tablet and destop devices
- Statistics: A chart is showing the statistics of topics wise number of quizes.

## Techlogy Used

![](https://img.shields.io/badge/Style-TailwindCSS-informational?style=flat&logo=Tailwindcss&color=00C7B7)

![](https://img.shields.io/badge/Code-React-informational?style=flat&logo=react&color=1e1bc6)

## API Reference

#### Get all Topics

```http
  GET https://openapi.programming-hero.com/api/quiz
```

| Parameter | Type | Description                             |
| :-------- | :--- | :-------------------------------------- |
| `none`    | `=`  | Fetch all the topics of the application |

#### Get all quizes on the specific topic

```http
  GET https://openapi.programming-hero.com/api/quiz/${topicId}
```

| Parameter | Type     | Description                        |
| :-------- | :------- | :--------------------------------- |
| `id`      | `string` | **Required**. Id of topic to fetch |

#### add(num1, num2)

Takes two numbers and returns the sum.

## Deployment

To deploy this project run

```bash
  npm i
```

or

```bash
  yarn add
```

## Live Website

Check [here](quizy-dude-041de2.netlify.app) to see the live website.

## Author

- [@Dabasish Das Joy](https://github.com/DabasishDasJoy)
