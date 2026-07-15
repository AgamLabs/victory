import articles, { findArticle } from './articles';

test('resolves travel insights by readable slug and legacy numeric URL', () => {
    const article = articles[0];

    expect(findArticle(article.slug)).toBe(article);
    expect(findArticle(String(article.legacyId))).toBe(article);
    expect(findArticle('missing-insight')).toBeUndefined();
});
