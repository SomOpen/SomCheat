
  <img src="https://raw.githubusercontent.com/Adam-Elmi/SomCheat/master/public/somcheat_logo.svg" alt="SomCheat Logo" width="200" style="vertical-align: middle;"/>





**SomCheat** waa il muhiim ah oo aad ka heli karto cheatsheets (xasuusiyayaal) ku qoran **af Soomaali**, si sahlanna kuu xasuusisa macluumaad hore aad taqaanay.

> **Waa maxay Cheatsheet?**
> Cheatsheet waa qoraal kooban oo kuu sahlaya inaad si degdeg ah u xasuusato waxyaabo muhiim ah adigoo aan wakhti badan ku bixin dib-u-barashadooda.

### Ujeeddada SomCheat

Hadafka SomCheat waa in uu kuu sahlayo inaad si fudud oo degdeg ah dib ugu xasuusato macluumaad hore aad u baratay, gaar ahaan marka aad wax cusub baratay laakiin muddo kadib wax badan iloowday.

Tusaale ahaan, waxaa laga yaabaa inaad bil ka hor baratey luuqad cusub, aadna wakhti badan ku bixisey daawashada casharro, akhriska buugaag iyo qoraallo. Balse dhowr toddobaad kadib waxaad dareentay in wax badan iloowday – SomCheat ayaa kuu noqonaya xasuusiye si aanad markale wakhti badan ugu lumin.

---

### Folder Structure
```
SomCheat
│
├── .astro/                      # Config file for Astro.
├── .vscode/                     # VS Code settings.
│
├── cheatsheet_tasks/            # Folder to store tasks.
│   ├── js.txt                   # JS-related tasks.
│   └── lua.txt                  # Lua-related tasks.
│
├── create_cheatsheet_tasks/     # Folder for task creation scripts.
│   └── create_tasks.js          # Handles the creation of tasks.
│
├── data/                        # JSON data.
│
├── node_modules/                # NPM dependencies.
│
├── public/                      # Public files.
│
├── src/                         # Source files.
│   ├── Components/              # Astro components.
│   ├── Layouts/                 # Layout templates.
│   ├── pages/                   # Pages.
│   ├── ReactComponent/          # React components.
│   ├── styles/                  # Stylesheets (CSS).
│   └── utils/                   # Utility functions.
│
├── tasks/                       # JSON tasks.
│
├── .gitignore                   # Git ignore file.
├── astro.config.mjs             # Astro config file.
├── package.json                 # NPM package file.
├── package-lock.json            # NPM lock file.
├── README.md                    # README file.
└── tsconfig.json                # TypeScript config file.
```

---

## Cheatsheet Tasks

Si aan u ogaano halka ay marayaan cheatsheet-yada, waxaan isticmaalnaa *cheatsheet tasks*. Tani waxay naga caawinaysaa inaan kala saarno:

* ✅ Cheatsheets dhameystiran
* 🔄 Kuwa weli socdo (in progress)
* ❌ Kuwa aan weli la bilaabin (Kuwa maqan)

### Sida Loo Sameeyo Cheatsheet Task

1. Tag folder-ka:

   ```
   /cheatsheet_tasks
   ```
2. Samee file `.txt` ah oo matalaya mawduuc (tusaale: `js.txt`).
3. Ku qor liiska mawduucyada (tasks) ee hoos yimaada cheatsheet-kaas:

#### Tusaale:

```txt
js.txt:
Task: Arrays - []
Task: Loops - [done]
Task: Functions - [Done]
```

#### Sharaxaad:

* `[ ]` → Mawduuca lama bilaabin, laakiin waa qorshe.
* `[done]` → Mawduuca waa la dhameystiray.

> **Xasuusin:** Erayada `Task` iyo `Done` uma baahna inay si gaar ah loo qoro — waxaad u isticmaali kartaa `TASK`, `task`, `DONE`, iwm. Qaabka adigu kuugu sahlan uun ku qor.

---

## Ka Qayb Qaado

SomCheat wuxuu isticmaalaa **MDX (Markdown + JSX)** si loogu sameeyo cheatsheets modular ah. Waxaa kuu diyaar ah Components fudud oo aad isticmaali karto si aad u sameyso cheatsheet cusub adigoon wax badan ka fekerin qaab dhismeedka.

### Folder Structure - Cheatsheets Folder

```
src/
├── pages/
│   └── cheatsheets/
│       ├── index.astro
│       ├── js.mdx
│       └── lua.mdx
```

### Components la Heli Karo:

| Component   | Sharaxaad                                             |
| ----------- | ----------------------------------------------------- |
| `Intro`     | Hordhac guud (ka baxsan structure-ka kale)            |
| `Structure` | Qaab dhismeedka guud ee isku xidhaya qeybaha mawduuca |
| `Section`   | Qayb u gaar ah mawduuc kasta                          |
| `Code`      | Koodh ama tusaale code                                |
| `Link`      | Refereces / Tixraaca                                 |
| `Message`   | Digniin, Alert, ama Error fariin ah                   |

---

### Tusaale: Side loo so import-gareyo Components:

Si aad u isticmaasho components-ka sida `Intro`, `Structure`, `Section`, iyo kuwo kale gudaha mashruucaaga, waa inaad marka hore **import** ka sameysid components-kaas:

**1. Soo Import garee `Intro` component:**

```js
import Intro from "../../Components/Intro.astro";
```

**2. Soo Import garee `Structure` component:**

```js
import Structure from "../../Components/Structure.astro";
```

**3. Soo Import garee `Section` component:**

```js
import Section from "../../Components/Section.astro";
```

**4. Soo Import garee `Code` component:**

```js
import Code from "../../Components/Code.astro";
```

**5. Soo Import garee `Message` component:**

```js
import Message from "../../Components/Message.astro";
```

**6. Soo Import garee `Link` component:**

```js
import Link from "../../Components/Link.astro";
```

---

## Component-ka 1aad: `Intro`

`Intro` waxaa loo isticmaalaa in lagu bixiyo **hordhac** ama **sharraxaad kooban** ee ku saabsan cheatsheet-ka. Waxaa lagu dhigayaa bilowga file-ka/faylka si qofka akhrisanaya uu fahmo waxa mawduucaasi ku saabsan yahay.

---

### Qaabka Isticmaalka (`Syntax`):

```mdx
<Intro title="Cinwaankaaga halkan geli">
  Qoraalka hordhaca ah halkan geli.
</Intro>
```

---

### Properties (Astaamaha/Qiimayasha uu qaato):

| Magaca Prop | Nooca           | Waa khasab? | Sharaxaad                                    |
| ----------- | --------------- | ----------- | -------------------------------------------- |
| `title`     | string (qoraal) | ✅ Haa       | Waa cinwaanka weyn ee ku muuqanaya hordhaca. |

---

### Fiiro Gaar ah:

* Gudaha `Intro` waxaad gelin kartaa components kale sida:

  * `<Message>` – digniin, talo, ama fariin
  * `<code>` – si aad ereyga u muujiso
  * Markdown

---

### Tusaale:

```mdx
<Intro title="JavaScript">
  JavaScript waa luuqad caan ah oo loo adeegsado horumarka frontend iyo backend labadaba.

  Halkan waxaad ka heli doontaa xasuusin kooban oo kaa caawinaya inaad dib u xasuusato mawduucyada muhiimka ah sida variables, functions iyo loops.

  <Message type="warning">
    Kahor intaadan bilaabin, waxaa muhiim ah inaad faham guud ka haysato `Node.js` ama inaad horey u soo martay luuqado backend ah sida `Express.js`.
  </Message>
</Intro>
```

---

## Component-ka 2aad: `Structure`

`Structure` waxaa loo isticmaalaa in lagu habeeyo qaybaha kala duwan ee cheatsheet-ka. Waa sida **isku xidhaha guud** ee ku haya dhammaan **qaybaha hoose** sida `Section`, `Code`, `Message`, iyo kuwo kale.

---

### Qaabka Isticmaalka (`Syntax`):

```mdx
<Structure>
  Qaybaha Section-ka halkan geli
</Structure>
```

---

### Properties:

`Structure` ma leh wax props ah. Waxaa muhiim ah in gudaha lagu geliyo qaybaha `Section`.

---

### Fiiro Gaar ah:

* Waa **khasab** in qaybaha aad isticmaali doonto sida `<Section>` ay ku jiraan gudaha `<Structure>`.
* Marka la eego qaab-dhismeedka, `Structure` wuxuu la mid yahay “wrapper” ama “container” — wuxuu ka dhigaa cheatsheet-ka mid habaysan oo la fahmi karo.

---

### Tusaale:

```mdx
<Structure>
  <Section>
    ## Variables
    Variable waa meel lagu keydiyo xog/qiime.
  </Section>

  <Section>
    ## Functions
    Function waa qaybo code ah oo la isticmaali karo si loo celiyo waxqabad gaar ah.
  </Section>
</Structure>
```

---

## Component-ka 3aad: `Section`

`Section` waxaa loo isticmaalaa in lagu kala saaro ama lagu **qeexo qayb kasta oo mawduuc gaar ah** ah sida *variables*, *loops*, *functions*, iwm. Waxa uu ka shaqaynayaa gudaha `Structure`.

---

### Qaabka Isticmaalka (`Syntax`):

```mdx
<Section>
  Qoraal, code, fariimo, iyo links halkan geli
</Section>
```

---

### Properties:

`Section` **ma laha props** – waxay si toos ah u qabataa waxa ku jira dhexdeeda.

---

### Fiiro Gaar ah:

* Waxaa laga dhigi karaa in kastoo aad rabto – sida sections badan: "Variables", "Loops", "Functions", iwm.
* Waxa ku dhex jiri kara: qoraal markdown ah, `<Code>`, `<Message>`, `<Link>`, `<Intro>` (haddii la rabay) iyo wax walba oo la xidhiidha qeybtaas.

---

### Tusaale:

```mdx
<Section>
  ## Loops (Wareegyo)

  Loops waa qaab aad ugu celin karto code marar badan adigoon si buuxda u qorayn mar kasta.

  <Code>
    ```js
    for (let i = 0; i < 5; i++) {
      console.log("Tirada waa: " + i);
    }
    ```
  </Code>

  <Message type="alert">
    Haddii aad isticmaaleyso `while` loop, iska ilaali in loop-ku uu noqdo mid aan dhamaanayn.
  </Message>

  <Link
    title="Loops in JavaScript"
    url="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration"
    description="Macluumaad dheeraad ah oo ku saabsan Loops."
  />
</Section>
```

---

## Component-ka 4aad: `Code`

`Code` waxaa loo isticmaalaa in lagu muujiyo tusaalooyin **code** ah gudaha cheatsheet-ka. Waxa uu taageeraa **syntax highlighting** oo kuu ogolaanaysa inaad ku muujiso code si haboon.

---

### Qaabka Isticmaalka (`Syntax`):

```mdx
<Code>
  Halkan gali code-ka
</Code>
```

---

### Properties:

`Code` ma laha **props** gaar ah. Waxa kaliya ee ku jira waa **code block**.

---

### Fiiro Gaar ah:

* Waxa uu taageeraa **syntax highlighting** haddii aad isticmaasho luuqada sida `js`, `python`, `html`, iwm.
* Waxaa loo isticmaalaa si gaar ah marka la doonayo in la muujiyo code si la fahmi karo oo qurux badan.

---

### Tusaale:
```
<Code>
```js
    const greet = (name) => {
    console.log("Hello " + name);
    };
    greet("Adam");
  ```
</Code>
```

---


## Component-ka 5aad: `Message`

`Message` waxaa loo isticmaalaa in lagu bixiyo **fariimo** gaar ah sida **digniin**, **talobixin**, ama **error**. Waxaa si gaar ah loogu isticmaalaa in lagu muujiyo fariimo muhiim ah ama digniin ku saabsan isticmaalka code-ka ama hawsha la qabanayo.

---

### Qaabka Isticmaalka (`Syntax`):

```mdx
<Message type="message_type">
  Qoraalka fariinta halkan gali.
</Message>
```

### `type` Prop:

* `type`: Waa prop ka caawiya in la kala sooco noocyada fariimaha. Waxaa jira saddex nooc oo muhiim ah:

  * `alert`: Fariin muhiim ah ama digniin.
  * `error`: Fariin khalad ama qalad.
  * `warning`: Fariin digniin ah oo muujinaysa in la ilaaliyo.

---

### Properties:

| Magaca Prop | Nooca  | Waa khasab? | Sharaxaad                                                          |
| ----------- | ------ | ----------- | ------------------------------------------------------------------ |
| `type`      | string | ✅ Haa       | Nooca fariinta. Waxaa laga yaabaa "alert", "error", ama "warning". |


---

### Tusaale:


```mdx
<Message type="warning">
  Kahor intaadan bilaabin Node.js, waxaa muhiim ah inaad faham guud ka haysato JavaScript.
</Message>

<Message type="error">
  Haddii aad wax khalad ah ku qorto code-kaaga, waxaa dhici karta in barnaamijkaaga uusan shaqaynin.
</Message>

<Message type="alert">
  Haddii aad rabto inaad barato backend-ka, ku bilow adiga oo baranaya Express.js.
</Message>
```
---


## Component-ka 6aad: `Link`

`Link` waxaa loo isticmaalaa in lagu bixiyo **link** muhiim ah oo tilmaamaya meelaha kale sida **documentation**, **website**, ama **resources**. Waxa uu u ogolaanayaa isticmaalaha inuu u guuro boggaga kale ee internetka.

---

### Qaabka Isticmaalka (`Syntax`):

```mdx
<Link title="Link Title" url="https://example.com" description="Link description here." />
```

### `title`, `url`, iyo `description` Props:

* `title`: Waa magac ama cinwaan lagu muujinayo link-ga. Waa muhiim in uu tilmaamo waxa link-ga ka hadlayo.
* `url`: Waa URL-ka link-ga ee loo gudbinayo marka la gujiyo.
* `description`: Waa sharaxaad kooban oo ku saabsan link-ga, si akhristaha uu fahmo waxa ama meesha uu booqan doono.

---

### Properties:

| Magaca Prop   | Nooca  | Waa khasab? | Sharaxaad                                                           |
| ------------- | ------ | ----------- | ------------------------------------------------------------------- |
| `title`       | string | ✅ Haa       | Cinwaanka link-ga, tusaale ahaan "React Docs".                      |
| `url`         | string | ✅ Haa       | URL-ka link-ga.                                           |
| `description` | string | ❌ Maya      | Sharaxaada link-ga, waxay siisaa akhristaha macluumaad dheeraad ah. |

---

### Fiiro Gaar ah:

* Waa muhiim in link-yadu ay bixiyaan sharaxaad kooban (haddii loo baahdo), taasoo ka caawinaysa isticmaalaha/user-ka inuu si sax ah u fahmo waxa uu booqanayo.

---

### Tusaale:

```mdx
<Link 
  title="React Documentation"
  url="https://react.dev/"
  description="Official documentation for React.js."
/>

<Link 
  title="MDN JavaScript Docs"
  url="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
  description="Comprehensive guide to JavaScript."
/>
```

---

## Tusaale Dhamaystiran oo Isticmaalka Dhammaan Components

#### `js.mdx`

```mdx

import Intro from "../../Components/Intro.astro";
import Structure from "../../Components/Structure.astro";
import Section from "../../Components/Section.astro";
import Code from "../../Components/Code.astro";
import Message from "../../Components/Message.astro";
import Link from "../../Components/Link.astro";

<Intro title="JavaScript">
  JavaScript waa luuqad barnaamij oo loogu talagalay in lagu daro shaqooyin firfircoon oo bogagga webka ah. Waa luuqad dhinaca browser-ka ah oo aad muhiim ugu ah horumarka webka casriga ah.
  <Message type="warning">
    Kahor intaadan bilaabin, waxaa muhiim ah inaad faham guud ka haysato JavaScript.
  </Message>
</Intro>

<Structure>
  <Section>
    # Variables in JavaScript
    ## Deklarashanka Xogta
    `let`, `const`, iyo `var` waxaa loo isticmaalaa in lagu qeexo variables.
    
    <Code>
      ```js
      let name = "Adam";
      const age = 25;
      var city = "Hargeisa";
      console.log(name, age, city);
      ```
    </Code>
    
    <Message type="alert">
      Markaad isticmaaleyso `let` iyo `const`, waa muhiim inaad fahamto farqiga u dhexeeya labada. `const` waxaa loo isticmaalaa si loo xakameeyo qiimaha aan la bedeli karin.
    </Message>
    <Link 
      title="JavaScript MDN Docs"
      url="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
      description="Halkan waxaad ka helaysaa dokumentiyada rasmiga ah ee JavaScript."
    />
  </Section>

  <Section>
    ## Functions in JavaScript
    Function-ku waa habka loo abaabulo code-ka iyo in la sameeyo hawlo gaar ah.
    <Code>
      ```js
      function greet(name) {
        return `Hello, ${name}!`;
      }
      console.log(greet("Adam"));
      ```
    </Code>
  
    <Message type="warning">
      Waa muhiim inaad si fiican u fahamto sida loo sameeyo functions si loo fududeeyo maamulka code-kaaga.
    </Message>
    
  </Section>

  <Section>
    # Arrays in JavaScript
    ## Loo yaqaan Liiska Xogta
    Arrays waxaa loo isticmaalaa in lagu keydiyo xog badan oo la xiriirta.
    <Code>
      ```js
      let fruits = ["apple", "banana", "orange"];
      fruits.push("grape");
      console.log(fruits);
      ```
    </Code>
    <Message type="error">
      Waa in aad ka digtoonaato in aad isticmaasho array-ka si aan habboonayn, gaar ahaan haddii ay tahay array waaweyn oo leh xog badan.
    </Message>
  </Section>

  <Section>
    # Functions and Methods in Arrays
    ## Methods-ka Array-ka
    Arrays waxay leeyihiin habab kala duwan sida `map()`, `filter()`, iyo `reduce()`.
    <Code>
      ```js
      let numbers = [1, 2, 3, 4, 5];
      let doubled = numbers.map(num => num * 2);
      console.log(doubled);
      ```
    </Code>
    <Message type="alert">
      Isticmaalka `map()` wuxuu ku siinayaa array cusub iyadoo la adeegsanayo hawl gaar ah oo ku saabsan xogta array-ga.
    </Message>
  </Section>
</Structure>

```

---