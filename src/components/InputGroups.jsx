export default function InputGroup({
  id,
  placeholder,
  type,
  labelText,
  onChange,
  value,
  optional,
  recommended,
  "data-key": dataKey,
}) {
  return (
    <div className="input-group flex flex-col m-1.5">
      <label htmlFor={id}>
        <span className="label-text font-semibold mr-2.5">{labelText}</span>
        {optional && <span className="optional-text text-sm text-slate-500">optional</span>}
        {recommended && <span className="recommended-text text-sm text-slate-500">recommended</span>}
      </label>

      {type === "textarea" ? (
        <textarea className="p-2.5"
          id={id}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
          data-key={dataKey}
        ></textarea>
      ) : (
        <input className="p-2.5 bg-slate-100 rounded-xl"
          type={type}
          id={id}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
          data-key={dataKey}
        />
      )}
    </div>
  );
}
