import Autocomplete from 'react-autocomplete';
import levenshtein from 'fast-levenshtein'
import { useState } from 'react';

function SearchBar() {

  const [value, setValue] = useState('');
  const maxItems = 10;
  const style = {
    placeholder: 'search',
  }

  const testItem = [{id:1,label:"Duck, white-faced whistling"},{id:2,label:"Common wombat"},{id:3,label:"Flamingo, roseat"},{id:4,label:"Eastern fox squirrel"},{id:5,label:"American bison"},{id:6,label:"Mocking cliffchat"},{id:7,label:"Galapagos mockingbird"},{id:8,label:"Lion, african"},{id:9,label:"Ibex"},{id:10,label:"Spotted-tailed quoll"},{id:11,label:"Snow goose"},{id:12,label:"Crow, american"},{id:13,label:"Hoary marmot"},{id:14,label:"Sociable weaver"},{id:15,label:"Mexican wolf"},{id:16,label:"Eland, common"},{id:17,label:"Two-toed tree sloth"},{id:18,label:"Sheep, stone"},{id:19,label:"White-headed vulture"},{id:20,label:"Eagle, pallas's fish"},{id:21,label:"Vulture, white-headed"},{id:22,label:"Skimmer, four-spotted"},{id:23,label:"Yak"},{id:24,label:"Koala"},{id:25,label:"Old world fruit bat (unidentified)"},{id:26,label:"Kookaburra, laughing"},{id:27,label:"Porcupine, african"},{id:28,label:"Squirrel, malabar"},{id:29,label:"Eurasian badger"},{id:30,label:"Jackal, asiatic"}];

  return (
    <Autocomplete
      wrapperStyle={{
        height: '30px',
        width: '300px',
      }}
      menuStyle={{
        position: 'absolute',
        overflow: 'auto',
      }}
      inputProps={
        {onKeyPress: (e) => {
            if (e.key === 'Enter') {
              console.log(e.target.value);
            }
          }, ...style}
      }
      autoHighlight={false}
      getItemValue={(item) => item.label}
      items={testItem}
      shouldItemRender={(item, value) => item.label.toLowerCase().indexOf(value.toLowerCase()) > -1}
      renderItem={(item, isHighlighted) =>
        <div key={item.id} style={{ background: isHighlighted ? 'lightgray' : 'white', color: 'black', width: '300px' }}>
          {item.label}
        </div>
      }
      renderMenu={ children => (
        <div className= "menu">
          {children.slice(0, maxItems)}
        </div>
      )}
      renderInput= {(props) => {
        return <input {...props} style={{width: '100%'}} />
      }}
      sortItems={(itemA, itemB, value) => {
        // Need to turn to lower case
        const strA = itemA.label.toLowerCase();
        const strB = itemA.label.toLowerCase();
        const lowerVal = value.toLowerCase();
        // check if prefix is the same
        if (strA.startsWith(lowerVal) && strB.startsWith(lowerVal)) {
          if(itemA.label < itemB.label) {
            return -1;
          }
          return 1;
        } else if (strA.startsWith(lowerVal)) {
          return -1;
        } else if (strB.startsWith(lowerVal)) {
          return 1;
        } else { // do some dyNaMic pRogRamMinG if not the same
          const scoreA = levenshtein.get(lowerVal, strA);
          const scoreB = levenshtein.get(lowerVal, strB);
          return scoreA - scoreB;
        }
      }}
      value={value}
      onChange={(e) => {
        setValue(e.target.value);
      }}
      onSelect={(val) => {
        setValue(val);
        console.log(val);
      }}
    />
  );
}

export { SearchBar };