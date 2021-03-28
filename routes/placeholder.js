const router = require("express").Router();

router.get('/placeholder-words', (req, res) => {
    res.send([
        {
            "word": "denouement",
            "type": "noun",
            "meaning": "the final resolution of the many strands of a literary or dramatic work; the outcome of a complex sequence of events",
            "example": "At the denouement of the movie, all questions were answered, and the true identity of the robber was revealed."
        },
    
        {
            "word": "puissant",
            "type": "adjective",
            "meaning": "powerful",
            "example": "Over the years of service, and quite to his surprise, he became a puissant advisor to the community."
        },
    
        {
            "word": "crystallize",
            "type": "verb",
            "meaning": "cause to take on a definite and clear shape",
            "example": "This word has other definitions but this is the most important one to study"
        },
    
        {
            "word": "ossify",
            "type": "verb",
            "meaning": "make rigid and set into a conventional pattern",
            "example": "Even as a young man, Bob had some bias against poor people, but during his years in social services, his bad opinions ossified into unshiftable views."
        },
    
        {
            "word": "rarefied",
            "type": "adjective",
            "meaning": "made more subtle or refined",
            "example": "Jack's vulgar jokes were not so successful in the rarefied environment of college professors."
        },
    
        {
            "word": "intimation",
            "type": "noun",
            "meaning": "an indirect suggestion",
            "example": "At first the hostess tried intimation, praising the benefits of cutlery; when Cecil continued eating with his hands, the hostess told him to use a fork at dinner."
        },
    
        {
            "word": "cosset",
            "type": "verb",
            "meaning": "treat with excessive indulgence",
            "example": "The king and queen cosseted the young prince, giving him a prized miniature pony for his fifth birthday."
        },
    
        {
            "word": "flippant",
            "type": "adjective",
            "meaning": "showing inappropriate levity",
            "example": "Although Sam was trying to honor Mark's sense of humor, many found it quite flippant that he wore a comic nose and glasses mask to Mark's funeral."
        },
    
        {
            "word": "immure",
            "type": "verb",
            "meaning": "to enclose, usually in walls",
            "example": "The modern supermarket experience makes many feel claustrophobic, as they are immured in walls upon walls of products."
        },
    
        {
            "word": "presentiment",
            "type": "noun",
            "meaning": "a feeling of evil to come",
            "example": "On the night that Lincoln would be fatally shot, his wife had a presentiment about going to Ford's Theater, but Lincoln persuaded her that everything would be fine."
        }
    ]);
});

module.exports = router;