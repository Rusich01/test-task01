import { Textarea } from "../ui/textarea";

const TextareaSidebar = () => {
  return (
    <section className="relative pt-3.25">
      <label>
        <Textarea className="resize-none w-full max-w-90 h-48.75 p-4 rounded-2xl border-[#F2F4F6] text-[13px] leading-relaxed overflow-y-scroll">
          Animate glowing rays pulsating from behind the bottle, leaves gently
          swaying, and golden sparkles floating upward for a natural, radiant
          effect.
        </Textarea>
      </label>
      <div className="absolute bottom-4.75 left-4.75 flex text-[12px]">
        <img src="./img/AI.png" alt="regenerate img" />
        <p>Regenerate</p>
      </div>
    </section>
  );
};

export default TextareaSidebar;
