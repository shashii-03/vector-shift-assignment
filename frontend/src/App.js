import { PipelineToolbar } from './toolbar';
import { PipelineUI } from './ui';
import { SubmitButton } from './submit';
import Button from './shadcn/ui/Button';

function App() {
  return (
    <div>
      <div className='text-6xl bg-red-200' >Hello</div>
      <Button size="large">Click Me</Button>

      <PipelineToolbar />
      <PipelineUI />
      <SubmitButton />
    </div>
  );
}

export default App;
