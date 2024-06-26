
# SD Solutions Test Assignment

Dear Interviewer,

I hope this README finds you well. I would like to draw your attention to the architecture I have organized for this project. It could have been done much more simply since the project is quite small.

I followed the Module Simple Architecture, where the structure consists of the following main layers:

* **UI** - This layer consists of basic components that absolutely do not contain any business logic. This layer cannot use the Components, Module, and Pages layers. Examples of these components are: Button, Input, Modal, Select, etc.

* **Components** - This layer may contain some business logic, but not much. It can only consist of the UI layer below it. Examples of these components are: UserCard, Comment, RatingCard, etc.

* **Modules** - This layer should be as independent as possible. It can consist of the layers below it - UI and Components. It isolates all logic. For instance, InfinityUsersList includes UserCard, ArticleComments includes Comments, and so on. In our case, it is simply QuestionsModal. This layer can contain everything related to the module: API, components, constants, helpers, store, etc.

* **Pages** - This layer consists of the layers presented below it.

Page example:

```javascript
const ArticlePage = () => {
  return (
     <div>
        <ArticleDetails />
        <ArticleStarRating />
        <ArticleAuthor />
        <ArticleComments />
     </div>
    )
}
```


**Conclusion**
* One-way data flow;
* The underlying layers cannot use the overlying layers;
* One module cannot use another module;

## Run Locally

Clone the project

```bash
  https://github.com/ElijahMinc/sd-solutions-tech-assignment.git
```

Go to the project directory

```bash
  cd sd-solutions-tech-assignment
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```

Command for build

```bash
  npm run build
```

