import Button from "@/components/button/Button";

export default function EditProject() {
  return (
    <>
      <div className="max-w-xl w-full border border-alto-500 rounded-3xl mt-14">
        <div className="flex flex-col items-center py-7 px-9">
          <label
            htmlFor="dropzone-file"
            className="border border-alto-500 rounded-3xl bg-[#F5F5F5] px-48 py-11 mb-5 text-sm cursor-pointer"
          >
            <div className="flex items-center justify-center">
              <p className="text-[#BEBEBE]">Добавьте изображение</p>
            </div>
            <input
              id="dropzone-file"
              type="file"
              className="opacity-0 absolute z-[-1]"
            />
          </label>
          <input
            type="text"
            className="border border-alto-500 rounded-3xl w-full bg-[#F5F5F5] py-3 pl-6 mb-5"
          />
          <textarea
            name=""
            className="border border-alto-500 rounded-3xl w-full bg-[#F5F5F5] pt-3 pb-5 px-6 mb-5 resize-none"
            id=""
          ></textarea>
          <textarea
            name=""
            className="border border-alto-500 rounded-3xl w-full bg-[#F5F5F5] pt-2 pb-7 pl-6 mb-12 resize-none text-sm"
            placeholder="Дополнительная информация"
            id=""
          ></textarea>
          <Button>Обновить</Button>
        </div>
      </div>
    </>
  );
}
