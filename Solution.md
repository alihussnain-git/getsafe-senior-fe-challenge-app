# Solution

## Task Breakdown

This task was a test of developer mindset rather than the test of react/FE skills of someone because as you can see in the [Task.md](Task.md), adding a new feature i.e is adding designer insurance to an oversimplified version of buying insurance flow was a piece of cake.

### How I approached the test:
- As a first step I have analyzed the repo and looked for if everything is up to date libraries, language version, routing, code etc. which was not, so as a first step I updated the repo with all dependencies to the latest stable versions and updated the code accordingly.
- Then I tried to clean and restructure the repo by creating a good directory structure which is easy to read and understand that where one can find/add something to work with the project. After that all components, web pages, routes etc. can be seen in the repo at first glance.
- I have then enhanced the existing logic of productIds enum to add the designer insurance feature, now any new insurance flow can be added just by extending the implementation of productIds.
- In the next part I have tried to improve the buying flow where selection of flow can be decided on basis of productId at run time which also includes what steps a specific productId can contain plus required validations also added as mentioned in the [Task](Task.md)
- After setting up the buying flow, now adding any step to any productId become quick. I have added 'Name' step in designer insurance buying flow as per [Task](Task.md) requirement. Also I have refactored some components for reusability and added previous button in the buying insurance flow because while testing the implementation I found it tricky to go back to previous step so added previous button as can be a big help for any UX like this.
- Added Buy button in summary step which leads user to success purchase page of insurance.
- Finally added test coverage

## Improvements

- Styles. As mentioned in the [Task](Task.md) requirements of this task was functional so I haven't put any effort on styles.
But normally how I like my styles structured are, theme directory inside the repo which will contain all typography, font styles, font size, assets extraction, reusable components theme etc. Every individual component style can be added to the same component directory e.g. AgeStep.module.css
- Localization and internationalization. If the application needs to support multiple languages or locales, consider adding support for localization and internationalization. Make the buying flow adaptable to different languages and cultures, allowing users to select their preferred language or automatically detect it based on their location. Besides that strings should now be hard coded in the files and use a local even if internationalization is not a requirement
- Custom forms. Using [Formik](https://formik.org/) for a form like in buying insurance flow which will provide custom implementation and some enhanced validation as well
- Progress indicator. Add a progress indicator to the BuyFlow component to show users their progress within the buying flow. This can be a visual representation (e.g., a progress bar) or a textual display (e.g., "Step 2 of 3"). It helps users understand their position in the flow and provides a better user experience.
- Optional steps. There can be some steps which can be optional while filling out this flow, add support of optional steps/fields in a step.
- Persistance of data. It can save user's time because progress will not be lost in case of page refresh etc.
- Navigation. Previous button can only help user to go to previous step but giving the user freedom to navigate on any step while filling out forms.