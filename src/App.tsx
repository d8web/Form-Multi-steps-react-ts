import { Router } from './router'
import { FormProvider } from './contexts/FormContext'

const App = () => {
    return (
        <FormProvider>
            <Router/>
        </FormProvider>
    )
}

export default App
// Continue to 2h https://www.youtube.com/watch?v=W1Ed9TEMGJU