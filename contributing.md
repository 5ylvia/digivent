# Contributing

In general, we follow the "fork-and-pull" Git workflow.

1. Fork the repo on GitHub
2. Clone the project to your own machine
3. Commit changes to your own branch
4. Push your work back up to your fork
5. Submit a Pull request so that we can review your changes

Issue Tracker: https://github.com/5ylvia/digivent/issues


## Developing
### Vue

>1. All components file name should be always PascalCase.
>2. All Folders are always kebab-case.
>3. Each component should be in its own folder.
>4. Try to create both speaker and user side in one component.
>If it is not available, make seperately and put them in the same folder.
>5. Child components that are tightly coupled with their parent should include the parent component name as a prefix.
```
components/
|- event/
    |- Event.vue
    |- EventThumbList.vue (child component)
|- Navbar.vue
|- Searchbar.vue
```
### Styling(CSS/SASS)
> We set theme colours on Vuetify.
> We use sass to set CSS, responsive size, and basic colours to use.

### Javascript best practice.

In general, we follow basic Javascript best practice. Such as :
>1. Stick to a Strict Coding Style
>2. Avoid Global Variables
>3. Initialize Variables
>4. Make it Understandable
>5. Use === Comparison
>6. Don’t Declare Unnecessary Variables
>7. Use Parameter Defaults

* Use Prettier Formatter for Visual Studio Code as a default formatter.

* Paths and name of the components are always kebab-case.
 
