walk(document.body);

function walk(node)
{var child, next;

    switch (node.nodeType)
    {
        case 1: //Element
        case 9: //Document
        case 11: // Document fragement
            child = node.firstChild;
            while (child)
            {
                next = child.nextSibling;
                walk(child);
                child = next;
            }
            break;

        case 3: // Text node
            handleText(node);
            break;
        default:
            break;
    }
}

function handleText(textNode)
{
    var text = textNode.nodeValue;

    text = text.replace(/ him /gi, ' Prince ');
    text = text.replace(/ her /gi, ' Prince ');
    text = text.replace(/ he /gi, 'Prince');
    text = text.replace(/ she /gi, 'Prince');
    text = text.replace(/girlfriend/gi, 'Little Red Corvette');
    text = text.replace(/boyfriend/gi, 'Little Red Corvette');
    text = text.replace(/husband/gi, 'Purple Rain');
    text = text.replace(/wife/gi, 'Purple Rain');
    text = text.replace(/ hers /gi, ' Princes ');
    text = text.replace(/ guy/gi, ' Artist Formerly Known As Prince');
    text = text.replace(/ girl/gi, ' Artist Formerly Known As Prince');


    textNode.nodeValue = text;
}