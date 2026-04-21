import Icon from "@/components/ui/icon";

const services = [
  {
    icon: "FileCheck",
    title: "Разрешения на строительство",
    desc: "Линейные и площадные объекты — сопровождение от документации до выдачи разрешения",
  },
  {
    icon: "Layers",
    title: "Инженерные изыскания",
    desc: "Геодезические, геологические и экологические изыскания для любых объектов",
  },
  {
    icon: "Cuboid",
    title: "Эскизные проекты с 3D-визуализацией",
    desc: "Концепции и визуализации зданий, сооружений и территорий до начала проектирования",
  },
  {
    icon: "ScanLine",
    title: "Лазерное сканирование",
    desc: "Точные обмеры помещений и объектов — облако точек, BIM-модели, чертежи",
  },
  {
    icon: "Thermometer",
    title: "Тепловизионное обследование",
    desc: "Выявление теплопотерь, дефектов ограждающих конструкций и инженерных систем",
  },
  {
    icon: "Map",
    title: "Проекты планировки территорий",
    desc: "Поселки, производственные зоны, объекты инфраструктуры — от концепции до ППТ",
  },
];

export default function Featured() {
  return (
    <div id="services" className="bg-white px-6 py-24 lg:py-32">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h3 className="uppercase mb-4 text-sm tracking-wide text-neutral-500">Наши компетенции</h3>
          <p className="text-3xl lg:text-5xl text-neutral-900 leading-tight max-w-2xl">
            Полный цикл — от первичных изысканий до получения разрешения на строительство
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <div key={i} className="border-t border-neutral-200 pt-6">
              <div className="mb-4 text-neutral-700">
                <Icon name={s.icon} size={28} fallback="CircleAlert" />
              </div>
              <h4 className="text-lg font-semibold text-neutral-900 mb-2">{s.title}</h4>
              <p className="text-neutral-500 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-12">
          <button className="bg-black text-white border border-black px-6 py-3 text-sm transition-all duration-300 hover:bg-white hover:text-black cursor-pointer uppercase tracking-wide">
            Обсудить проект
          </button>
        </div>
      </div>
    </div>
  );
}
